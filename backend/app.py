import os
from dotenv import load_dotenv
from flask import Flask, request, abort, jsonify
from flask_cors import CORS
from werkzeug.exceptions import HTTPException
from schemas.request_schema import RequestSchema
from schemas.output_schema import CodeAnalysisOutputSchema
from prompts.analysis_prompt import code_analysis_prompt
from langchain_google_genai import ChatGoogleGenerativeAI


# app initialised
app = Flask(__name__)


# allowed origins
CORS(app,origins=["http://localhost:3000"])


# loads environment variables
load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")


# structured model
llm_model = ChatGoogleGenerativeAI(
    model="gemini-3-flash-preview", thinking_level="high")
structured_llm_model = llm_model.with_structured_output(
    CodeAnalysisOutputSchema)


# testing route
@app.route("/")
def test():
    return {"message": "server is running...."}


# error handler
@app.errorhandler(HTTPException)
def handle_error(e):
    return jsonify({
        "error": e.name,
        "message": e.description
    }), e.code


# analyse overall and source code's each line time complexity and overall space complexity
@app.route("/analyse", methods=["POST"])
async def analyse_complexity():
    json_file = request.get_json(force=True)
    data = RequestSchema(**json_file)
    source_code = data.code

    try:
        if not source_code:
            abort(404, description="source code not found !")
        prompt = code_analysis_prompt()
        final_chain = prompt | structured_llm_model
        response = await final_chain.ainvoke({"source_code": source_code})
        return {"response": response.model_dump()}

    except Exception as e:
        abort(400, description=str(e))


if __name__ == '__main__':
    app.run()
