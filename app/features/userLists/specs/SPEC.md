# User Lists Feature

## Intent
Provide users with a simple interface to manage a list of usernames. Users should be able to view all stored usernames, add new ones through a dedicated input field, and remove individual users from the list.

## In scope
- Display a title and descriptive label for the feature
- Input field to add new username entries
- Button to submit/add the new username
- Display all users in a list format
- Delete button for each user in the list
- Local state management for user list

## Out of scope
- Persisting data to a backend/database
- User authentication or permissions
- Bulk operations (delete all, export)
- Sorting or filtering users
- Validation against external user databases

## Requirements
- Title text: "Gestión de Usuarios" (User Management)
- Label text: "Nombre de usuario" (Username) for the input field
- Input field must accept text input for usernames
- Add button to submit the username to the list
- Each user in the list should have a delete button
- List should display empty state when no users are present
- Prevent adding empty or whitespace-only usernames

## Edge cases & errors
- Empty string submission should be ignored
- Whitespace-only strings should be ignored
- Duplicate usernames should be allowed (or blocked - based on preference)
- Deleting last user should show empty state
- Input field should clear after successful addition

## Constraints
- Reuse existing components: `Button`, `Title`, `Input`, `Section`, `Text` from `@/app/components`
- Use React hooks for state management (no Redux needed for this feature)
- Follow component-architecture: separate presentation (.tsx) from logic (useViewModel)
- Keep main component return readable via local mini components

## Acceptance criteria
- [ ] Feature folder created under `app/features/userLists/`
- [ ] Main component renders with title, label, input, and list
- [ ] Users can add new usernames via input + button
- [ ] Users can delete individual usernames
- [ ] Input clears after successful addition
- [ ] Empty state displays when list is empty
- [ ] Code follows component-architecture pattern (ViewModel separation)
- [ ] All shared UI components reused from `@/app/components`
