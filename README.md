# Implementation Notes

## What was done

- Built a filter modal window based on the Figma design
- Modal opens via a button on the homepage
- Filter state is managed with Zustand — draft state for in-progress edits, saved state for confirmed filters
- On Apply, a confirmation dialog appears — confirming saves to global state, cancelling keeps previous filters
- Pre-fills previously selected filters when reopening the modal
- Selected filters are displayed on the homepage in JSON format
- GitHub Actions CI pipeline runs type check, lint, format check, tests and build on every push and PR

## Extra technologies

### shadcn/ui

Added to simplify building accessible UI components (checkboxes, tooltips, dialogs, buttons). Components are copied into the project and fully customizable, which fits well with the existing Tailwind setup.
