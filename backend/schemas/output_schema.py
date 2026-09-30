from pydantic import BaseModel, Field
from typing import Literal

# code analysis output schema
class CodeAnalysisOutputSchema(BaseModel):
    time_complexity: Literal["O(1)", "O(log n)", "O(√n)", "O(n)",
                             "O(n log n)", "O(n²)", "O(n³)", "O(2ⁿ)", "O(n!)"] = Field(description="final time complexity of the full code")
    space_complexity: Literal[
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n²)"
    ] = Field(description="final space complexity of the full code")
    points: list[str] = Field(
        description="each line description with time complexity"
    )
    notes: list[str] = Field(
        description="important assumptions, input variables, and built-in function complexity"
    )
