# Integration Toggle Feature - Implementation Summary

## Overview
Implemented a toggle feature in the Code Section where users can switch between different integration types, and the code examples update dynamically with smooth GSAP animations.

## Features Implemented

### 1. **Multiple Integration Code Sets**
Created three separate code databases in `/lib/constants/index.ts`:

- **CODES_CONNECTION_SETUP** - HTTP REST connection examples (Go, Python, TypeScript)
- **CODES_DATABASE_SCHEMA** - Database schema definition examples (TypeScript, Go, Python)
- **CODES_WEBSOCKET_INTEGRATION** - Real-time WebSocket examples (TypeScript, Go, Python)

Each set contains language-specific implementations with descriptions.

### 2. **Interactive Integration Buttons**
Updated integration buttons to:
- Display as clickable toggle buttons instead of static displays
- Show active/inactive states with visual feedback
- Change background, border, and icon colors based on active state
- Smooth color transitions (300ms)

### 3. **GSAP Animations**
Implemented smooth fade in/out animations when switching between integrations:

```typescript
// Animate out when changing integration
gsap.to(codeTabsRef.current, {
  opacity: 0,
  duration: 0.3,
  ease: 'power2.in',
  onComplete: () => {
    setSelectedIntegration(integrationId);
  }
});

// Animate in when integration changes
gsap.to(codeTabsRef.current, {
  opacity: 1,
  duration: 0.4,
  ease: 'power2.out',
});
```

- **Fade out**: 0.3s with power2.in easing
- **Fade in**: 0.4s with power2.out easing
- Creates a smooth, professional transition effect

### 4. **State Management**
- Track selected integration with React state
- Map integration IDs to their corresponding code sets
- Update CodeTabs component with current integration codes

## File Changes

### `/lib/constants/index.ts`
- Added `CODES_CONNECTION_SETUP` object with 3 language examples
- Added `CODES_DATABASE_SCHEMA` object with 3 language examples
- Added `CODES_WEBSOCKET_INTEGRATION` object with 3 language examples
- Updated `INTEGRATIONS` array to include `id` field for each integration
- Maintained backward compatibility with `CODES` export pointing to `CODES_CONNECTION_SETUP`

### `/components/landing/sections/Code/CodeSection.tsx`
- Converted from static display to interactive toggle component
- Added state management for selected integration
- Implemented GSAP animation controller
- Updated integration button styling to show active/inactive states
- Created integration-to-code mapping logic

## Visual Effects

### Active State Styling
```
Background: bg-neutral-700
Border: border-neutral-600
Icon Background: bg-neutral-700
Icon Color: text-white
Text Color: text-white
Shadow: shadow-lg shadow-neutral-600/20
```

### Inactive State Styling
```
Background: bg-neutral-900/50
Border: border-neutral-800
Icon Background: bg-neutral-800/50
Icon Color: text-neutral-300
Text Color: text-neutral-400 (description)
```

## Code Examples Added

### Database Schema Integration
- TypeScript: Schema definition with Kinetix platform ORM
- Go: Schema registration from backend service
- Python: Model representation for accessing schema

### WebSocket Integration (Real-Time)
- TypeScript: Real-time project events listener
- Go: WebSocket event publisher from backend
- Python: Event listener for automation/alerting

## Animation Flow
1. User clicks integration button
2. CodeTabs opacity fades out (300ms, power2.in)
3. Integration state updates
4. CodeTabs opacity fades in (400ms, power2.out)
5. New code examples display with smooth animation

## Browser Support
Works with all modern browsers supporting:
- GSAP 3.14.2+
- CSS Grid & Flexbox
- ES2020+ JavaScript

## Performance Considerations
- GSAP animations are GPU-accelerated
- No unnecessary re-renders
- Efficient state updates with React hooks
- Single animation timeline per toggle action

## Future Enhancements
- Add copy-to-clipboard functionality for code blocks
- Implement URL parameters to link directly to specific integration
- Add keyboard navigation (arrow keys to switch integrations)
- Add analytics tracking for popular integrations
- Implement auto-switching between integrations based on user scroll
