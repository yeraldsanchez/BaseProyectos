# User Lists Feature

A simple, reusable feature for managing a list of usernames in the MediXenter application.

## Features

- 📝 Add new usernames through a dedicated input field
- 👥 Display all stored usernames in a list
- 🗑️ Delete individual usernames from the list
- ✨ Empty state when no users are present
- ⌨️ Enter key support for quick additions

## Usage

### Basic Import

```tsx
import { UserLists } from "@/app/features/userLists";

export default function MyPage() {
  return <UserLists />;
}
```

### Live at the root route

`app/page.tsx` renders `UserLists` directly, so the feature is visible at `/`.

## Architecture

### File Structure

```
app/features/userLists/
├── UserLists.tsx                    # Main component (entry point)
├── hooks/
│   └── useUserListsViewModel.ts    # State management logic
├── models/
│   ├── UserListsViewModel.interface.ts
│   └── UserListsProps.interface.ts
├── components/
│   ├── UserListsHeader.tsx         # Header with title
│   ├── UserListsInput.tsx          # Input + Add button
│   └── UserListsTable.tsx          # User list display
├── specs/
│   └── SPEC.md                     # Feature specification
├── index.ts                        # Public exports
└── README.md                       # This file
```

### Component Hierarchy

```
UserLists (client component, uses ViewModel)
├── UserListsHeader (static header)
├── UserListsInput (input + add button)
└── UserListsTable (user list + delete actions)
```

### State Management

State is managed locally using React hooks via `useUserListsViewModel`:

- `users`: Array of username strings
- `newUsername`: Current input value
- `onInputChange`: Handler for input changes
- `onAddUser`: Handler for adding users
- `onDeleteUser`: Handler for deleting users

## Component Props

### UserLists

No props required. The component is self-contained with local state management.

```tsx
<UserLists />
```

## Styling

The feature uses Tailwind CSS classes and integrates with the existing MediXenter design system. All UI components are reused from `@/app/components`:

- `Title`, `Text`: Typography
- `Section`: Layout wrapper
- `FormField`: Input field
- `Button`: Action buttons
- `DeleteIcon`: Delete action icon

## Reusing Shared Components

This feature follows the project standard of always reusing existing shared components:

- ✅ Uses `FormField` from `@/app/components` for input
- ✅ Uses `Button` from `@/app/components` for actions
- ✅ Uses `Text`, `Title` from `@/app/components` for typography
- ✅ Uses `DeleteIcon` from `@/app/components/icons/delete/` for delete action

## Acceptance Criteria (Met)

- ✅ Feature folder created under `app/features/userLists/`
- ✅ Main component renders with title, label, input, and list
- ✅ Users can add new usernames via input + button
- ✅ Users can delete individual usernames
- ✅ Input clears after successful addition
- ✅ Empty state displays when list is empty
- ✅ Code follows component-architecture pattern (ViewModel separation)
- ✅ All shared UI components reused from `@/app/components`

## Future Enhancements

Potential features that could be added in the future:

- Persist data to localStorage or backend
- Input validation (email format, username patterns)
- Duplicate username detection
- Search/filter functionality
- Bulk operations (select multiple, delete all)
- User edit capabilities
- Sort options (alphabetical, date added)
