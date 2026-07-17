# Prompt Ladder

## Project

Frontend AI Engineering Internship – Settings Form

---

# Baseline Prompt (Version 0)

## Prompt

Build a settings form for a Next.js app.

## Output (Representative)

The AI generated a basic settings form with standard input fields but provided little structure, validation, or accessibility guidance.

### Notes

**What changed in the prompt**

- Baseline prompt with no additional guidance.

**What improved in the output**

- None. This is the starting point.

**What still failed**

- The response lacked context, validation, accessibility, and reusable structure.

**What I would try next**

- Add a clear goal.

---

# Version 1 – Clear Goal

## Prompt

Build a reusable settings form for a Next.js application where users can edit their profile, preferences, and notification settings.

## Output (Representative)

The AI generated a more complete settings form covering the required sections.

### Notes

**What changed in the prompt**

- Added a clear goal.

**What improved in the output**

- The response became more focused and included the required sections instead of producing a generic form.

**What still failed**

- The implementation still lacked information about who the interface was for.

**What I would try next**

- Add the target audience.

---

# Version 2 – Audience

## Prompt

Build a reusable settings form for a Next.js application where users can edit their profile, preferences, and notification settings.

The interface is intended for everyday users and should be easy to understand.

## Output (Representative)

The AI simplified labels and suggested a cleaner layout.

### Notes

**What changed in the prompt**

- Added the target audience.

**What improved in the output**

- The wording became simpler and the interface focused more on usability.

**What still failed**

- This change did not significantly improve the code quality or validation.

**What I would try next**

- Add project context.

---

# Version 3 – Context

## Prompt

Build a reusable settings form for a Next.js application where users can edit their profile, preferences, and notification settings.

The interface is intended for everyday users and should be easy to understand.

The project uses React, Next.js, TypeScript, and Tailwind CSS.

## Output (Representative)

The AI generated code that better matched the project's technology stack.

### Notes

**What changed in the prompt**

- Added project context.

**What improved in the output**

- The generated solution aligned better with the existing project structure and technologies.

**What still failed**

- Validation and accessibility were still incomplete.

**What I would try next**

- Add implementation constraints.

---

# Version 4 – Constraints

## Prompt

Build a reusable settings form for a Next.js application where users can edit their profile, preferences, and notification settings.

The interface is intended for everyday users and should be easy to understand.

The project uses React, Next.js, TypeScript, and Tailwind CSS.

Use controlled components, reusable code, accessibility best practices, and client-side validation.

## Output (Representative)

The AI generated a more maintainable implementation with improved accessibility and validation.

### Notes

**What changed in the prompt**

- Added implementation constraints.

**What improved in the output**

- The code became more reusable, accessible, and closer to production quality.

**What still failed**

- There was no instruction to verify the final implementation.

**What I would try next**

- Add verification requirements.

---

# Version 5 – Verification

## Prompt

Build a reusable settings form for a Next.js application where users can edit their profile, preferences, and notification settings.

The interface is intended for everyday users and should be easy to understand.

The project uses React, Next.js, TypeScript, and Tailwind CSS.

Use controlled components, reusable code, accessibility best practices, and client-side validation.

Before finishing, verify that:

- validation works

- accessibility requirements are met

- TypeScript has no errors

## Output (Representative)

The AI included validation checks and verification steps before considering the task complete.

### Notes

**What changed in the prompt**

- Added verification requirements.

**What improved in the output**

- The response included checks that increased confidence in the final implementation.

**What still failed**

- Manual testing by the developer was still required.

**What I would try next**

- No further changes.

---

# Final Reusable Prompt

Build a reusable settings form for a Next.js application where users can edit their profile, preferences, and notification settings.

The interface is intended for everyday users and should be easy to understand.

The project uses React, Next.js, TypeScript, and Tailwind CSS.

Use controlled components, reusable code, accessibility best practices, and client-side validation.

Before finishing, verify that:

- validation works

- accessibility requirements are met

- TypeScript has no errors.