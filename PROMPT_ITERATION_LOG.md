# Prompt Iteration Log

## Task

Build a validated settings form for a Next.js application.

---

# Version 0 – Naive Prompt

## Prompt

Build a settings form.

## Representative Output

The AI generated a basic settings form with little structure, validation, or accessibility guidance.

### Observation

The output was generic and lacked project-specific details.

---

# Version 1 – Role Assignment

## Prompt

You are a senior frontend engineer.

Build a settings form.

## Representative Output

The AI responded with more professional recommendations and better coding practices.

### Observation

Assigning a role improved the technical quality but still lacked project context.

---

# Version 2 – Context & Motivation

## Prompt

You are a senior frontend engineer.

I am building a frontend internship project using React, Next.js, TypeScript, and Tailwind CSS.

Build a reusable settings form suitable for this project.

## Representative Output

The response aligned much better with the project's technology stack.

### Observation

Adding context made the generated solution more relevant and practical.

---

# Version 3 – Few-shot Example

## Prompt

You are a senior frontend engineer.

Example of a good solution:

- Reusable component

- Accessible labels

- Client-side validation

- TypeScript types

Now build a settings form following this style.

## Representative Output

The AI followed the example and produced a cleaner, more structured solution.

### Observation

Providing an example helped the AI match the desired quality and organization.

---

# Version 4 – Output Structure

## Prompt

You are a senior frontend engineer.

Provide:

1. Folder structure

2. Components

3. TypeScript types

4. Validation plan

5. Testing checklist

## Representative Output

The AI organized the response into clearly defined sections.

### Observation

Specifying the output structure made the response much easier to review and implement.

---

# Version 5 – Step Decomposition

## Prompt

You are a senior frontend engineer.

Work through the task step by step:

1. Plan

2. Design

3. Build

4. Validate

5. Verify

## Representative Output

The AI explained each phase before generating the implementation, producing a more reliable workflow.

### Observation

Breaking the task into steps resulted in a more thoughtful and complete response.

---

# Cross-Model Comparison

## Claude

- Better reasoning and planning

- Stronger explanations

- More likely to discuss trade-offs

## ChatGPT

- More direct responses

- Clear implementation guidance

- Faster to reach a complete solution

## Comparison

Claude was stronger for planning and explaining decisions, while ChatGPT produced concise implementation guidance more quickly. Both produced useful results, but Claude emphasized reasoning whereas ChatGPT emphasized execution.

---

# Final Reusable Prompt Template

You are a [ROLE].

Context:

[Describe the project, technologies, and goal.]

Task:

[Describe what needs to be built.]

Requirements:

[List important constraints and quality requirements.]

Output Format:

- Folder structure

- Components

- Types

- Validation

- Testing

Work through the task step by step.

Before finishing, verify:

- Requirements are met

- Accessibility is considered

- Validation is complete

- Code is production-ready where appropriate.