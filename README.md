# Les Petits Plats

This project aims to develop a recipe web application, "Les Petits Plats," focusing on implementing a dynamic user interface and optimizing search algorithms. We'll explore and compare two distinct algorithmic approaches in terms of performance.

---

## 🧩 Step 1: Interface Implementation

This step involves building the application's user interface, strictly adhering to the Figma mockup.

* **Faithful Design:** Precisely replicate the design provided in Figma.
* **Technologies:** Use **HTML** and **CSS**, with the option to integrate **Bootstrap** or **Tailwind CSS** in CSS-only mode.
* **Accessibility:** Validate the HTML code using the **W3C Validator** to ensure compliance with accessibility standards.
* **UI Optimization:** Structure the HTML to facilitate the dynamic generation of elements via JavaScript (recipe cards, filters, tags, etc.).

---

## 🧠 Step 2: Preparing Two Search Algorithm Versions

We'll prepare two versions of search algorithms for in-depth comparison.

### Investigation Sheet

An investigation sheet will be created to document each algorithm version.

| Version                    | Description                                  |
| :------------------------- | :------------------------------------------- |
| 1 - Native Loops           | Using `for`, `while`, `for...of`             |
| 2 - Functional Programming | Using `filter()`, `map()`, `reduce()`, etc. |

* **Search Objectives:** Clearly define the functionality, inputs, and expected outputs for each algorithm.
* **Diagramming:** Visually represent each algorithm as a **flowchart** (using draw.io).

---

## 🔧 Step 3: Technical Implementation

Technical implementation will occur on separate Git branches for each algorithm version.

* **Git Branches:** Create two branches: `search-native-loops` and `search-functional`.
* **Main Search:** Implement the core search functionality within each branch.
* **Best Practices:**
    * **Security:** Implement **user input sanitization**.
    * **Green Code:** Develop reusable functions and modular code.
    * **Performance:** Minimize DOM manipulation for optimized performance.
* **Tip:** Use HTML components generated via JavaScript (e.g., `recetteCard()`, `createTagList()`) for better modularity.

---

## 📊 Step 4: Performance Tests

Performance tests will be conducted to evaluate the efficiency of each search algorithm.

* **Tool:** Use **jsben.ch** for performance measurements.
* **Focus:** Tests will exclusively concentrate on the main search functionality.
* **Results:** Record the following data in the investigation sheet:
    * Average execution time.
    * Number of operations per second.
    * Advantages and disadvantages of each version.

---

## 🧾 Step 5: Finalizing the Investigation Sheet

The investigation sheet will be completed with test results and a reasoned recommendation.

* **Summary:** Fill in the remaining sections of the document.
* **Conclusion:** Provide a reasoned recommendation for the algorithm to adopt, based on performance and best practices.
* **Outlook:** Specify the prospects for back-end integration of the chosen algorithm.

---

## 🔄 Step 6: Tag Search (Common)

This step involves managing tag search, which will be common to both algorithmic approaches.

* Only one implementation version will be used to handle tag search (ingredients, appliances, utensils), regardless of the primary search algorithm chosen.

