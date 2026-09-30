from pydantic import BaseModel, Field

# request schema
class RequestSchema(BaseModel):
    code: str = Field(
        description="source code to analyze for time and space complexity"
    )
