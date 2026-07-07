DUWEM Engineering Journal
Entry 001

Date: July 6, 2026

Sprint: Sprint 1

Milestone: Engineering Foundation

Author: Cosmas Udom & ChatGPT

Status: Completed ✅

Objective

Begin the engineering implementation of the DUWEM platform by setting up a modern, scalable development environment that will support future products and engineering growth.

This marks the transition from a static HTML prototype to a production-grade software platform.

Accomplishments
1. Development Environment

Verified and prepared the local development environment.

Installed and Verified

Node.js v24.16.0
npm v11.13.0
pnpm v11.10.0
Git
Visual Studio Code
2. PowerShell Configuration

Resolved the PowerShell execution policy issue that prevented npm commands from running.

Configured the system to allow local development scripts while maintaining an appropriate security level.

3. Monorepo Initialization

Initialized the DUWEM workspace using the official Turborepo starter.

This establishes a scalable architecture suitable for multiple applications and shared packages.

Current structure:

DUWEM/
├── apps/
│   ├── docs/
│   └── web/
├── packages/
│   ├── eslint-config/
│   ├── typescript-config/
│   └── ui/
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
4. Verified Local Development

Successfully started the development environment using:

pnpm dev

Confirmed:

Next.js 15
Turbopack
Turborepo task orchestration
docs application
web application

were all running correctly.

Engineering Decisions
Decision 001

Use a Turborepo Monorepo architecture.

Reason

Provides a scalable foundation for:

Public website
Main application
Documentation
Storybook
Admin portal
Shared packages
Decision 002

Use pnpm as the package manager.

Reason
Faster installs
Efficient disk usage
Excellent workspace support
Industry standard for monorepos
Decision 003

Adopt Next.js as the application framework.

Reason
React ecosystem
Excellent SEO
Server Components
Strong developer experience
Future-ready architecture
Lessons Learned
Windows PowerShell execution policies can block npm scripts on a fresh setup.
The official Turborepo starter provides an excellent baseline, reducing setup time and following current best practices.
Investing time in the engineering foundation before writing features reduces future technical debt.
Next Session Goals
Rename apps/web to apps/site.
Expand the application structure (app, admin, storybook, playground).
Expand the shared package structure.
Create the @duwem/design-tokens package.
Begin implementing the DUWEM Design Tokens.
Milestone Progress
Engineering Foundation

█████░░░░░░░░░░░░░░░ 25%
Quote of the Day

"We are no longer building pages. We are building the platform that will power every page."

"Founder's Reflection."
I learned how to build a multinational platform today. The foundational setup of the app is impressive. I feel excited for this.

📚 Engineering Journal Entry 002

I think this milestone deserves its own journal entry:

Title: Establishing the DUWEM Foundation

It would record:

Why we evolved from design-tokens to foundation.
Why we adopted domain-based organization.
Why every package exposes a single public API.
The architectural principles behind the foundation layer.

These aren't just implementation details—they're decisions that will shape every application we build.

📈 Engineering Journal Entry 002

Today's achievements include:

✅ Established the @duwem/foundation package.
✅ Created the initial Foundation folder structure.
✅ Added primitive color tokens.
✅ Fixed all TypeScript and workspace configuration issues.
✅ Verified the workspace compiles cleanly.

🎉 Engineering Milestone Achieved

This deserves to be recorded.

Engineering Journal Entry 003

Title: Understanding Monorepo Workspaces

Lesson Learned

When working in a Turborepo monorepo, always open the repository root in VS Code.

Correct:

C:\Projects\DUWEM

Incorrect:

C:\Projects\DUWEM\packages\foundation

Opening a subfolder prevents VS Code from resolving workspace packages correctly.

🏆 Engineering Journal Entry 004

Title: Foundation Package Successfully Created

Achievement

Today we successfully created the first custom package in the DUWEM monorepo.

Lessons Learned
Always open the repository root (DUWEM) in VS Code.
Don't manually invent package structures when a working template exists.
Verify that a package compiles before adding functionality.
Use check-types as the first quality gate.
Commands Verified
pnpm install
pnpm --filter @duwem/foundation run check-types

Result:

✅ SUCCESS
Sprint Progress
Sprint 1

✅ Development Environment
✅ Turborepo
✅ Workspace
✅ Foundation Package
✅ TypeScript
✅ Build Verification

⬜ Design Tokens
⬜ Theme
⬜ UI Components

We've officially finished the infrastructure phase.
