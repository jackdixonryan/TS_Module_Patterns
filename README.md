# TS_Module_Patterns
Building, testing, and viability of different module patterns in TypeScript. 

## The List
### The Singleton
Summary: 
Link: https://en.wikipedia.org/wiki/Singleton_pattern
Must: 
- Enforce the singularity of its own instantiation
- Obscure its constructor
- Define one public static operation `getInstance()` that returns the only instance of the Singleton. 
Could: 
- Use lazy-initialization 
  - In this case, it effectively means that calling the `getInstance` method would create an instance of the singleton if there was not already an existing instance. 
Uses: 
- Logging 
- Global Variable storage
- State management 
- Facades, Abstract Factories, Factories, Builders, and prototypes
Drawbacks: 
- Because it can only be initialized once, and because most unit tests rely on loosely coupled classes to isolate individual tests, it can be difficult to test a Singleton. 
- Any class that interacts with the singleton cannot be decoupled from the Singleton either. 
- Makes dependency analysis more difficult 
- Violates SRP.