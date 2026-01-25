# Visual Lab 🧪

A collection of visual experiments and interactive components built with React, TypeScript, and Vite.

## Overview

Visual Lab is a playground for testing and demonstrating various UI/UX concepts, animations, and generative art techniques. It is designed to be a modular environment where different "labs" can be created and explored.

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd visual-lab
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Running the App

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to the local URL (usually `http://localhost:5173`).

## 🧬 Project Structure

The project is organized to separate independent visual experiments ("labs") from the main application layout.

- `src/page/VisualLab`: The main entry point and layout for the application, including the sidebar and main content area.
- `src/components/labs`: Contains the individual visual experiments.
  - `NoiseCanvas`: A canvas-based experiment generating noise patterns with interactive thumbnail resizing.
- `src/config/labs.tsx`: Configuration file to register and manage available labs.

## 🛠️ Tech Stack

- **React**: UI Library
- **TypeScript**: Static Typing
- **Vite**: Build Tool & Dev Server
- **CSS**: Styling (Modular & Global)
