# AI Development Workflow Comparison

## Overview

This document compares two approaches used to build the settings form feature. Round one used a vague AI prompt, while round two used a detailed specification with constraints and verification steps.

## Round One: Vague Prompt

The first implementation was created using a simple instruction: "Create a settings form." The AI generated a working feature, but many decisions were left to the model. It selected the fields, structure, and behavior without project-specific requirements.

The result included a reusable settings component and a settings page, but it lacked clearly defined validation rules, accessibility requirements, and a verification process. The review effort was higher because important requirements had to be discovered after generation.

## Round Two: Precise Prompt

The second implementation used a detailed prompt containing project context, technology constraints, required fields, validation rules, accessibility requirements, and verification steps.

The improved workflow produced a more predictable result. The AI created a shared TypeScript type file, added controlled inputs, implemented validation, connected error messages to fields, and checked the application after implementation.

The second round required more planning before generating code, but it reduced review time because expectations were clear from the beginning.

## Correctness and Edge Cases

Round two handled correctness better because the requirements defined expected behavior. It included required display name validation, email format checking, and bio length limits. During verification, an AI-generated TypeScript issue was found and fixed before completion.

Round one worked, but edge cases were not considered until manual review.

## Accessibility

The precise workflow produced better accessibility results. Labels, error states, and accessible status messages were included because they were requested explicitly. The vague approach did not define accessibility requirements, requiring additional review.

## Review Effort

The main difference was the amount of developer review needed. Round one required more investigation to understand missing requirements. Round two required less correction because the AI had clearer instructions and a verification checklist.

## Conclusion

The comparison shows that effective AI development depends on clear specifications, constraints, and verification. AI can generate code quickly, but the developer must provide direction and review the output to ensure quality.