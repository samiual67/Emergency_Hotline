
## 1. Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll

**getElementById(id)**
- Selects a single element by its unique id.
 - Returns one Element or null.
 - Example: let header = document.getElementById("header");

**getElementsByClassName(className)**
- Selects all elements with a specific class.
- Returns a live HTMLCollection (updates automatically if elements change).
- Example : let items = document.getElementsByClassName("item");

**querySelector(selector)**
- Selects the first element matching a CSS selector.
- Returns one Element or null.
- Example : let firstItem = document.querySelector(".item");

**querySelectorAll(selector)**
- Selects all elements matching a CSS selector.
- Returns a static NodeList (does not update automatically).
- Example: let allItems = document.querySelectorAll(".item");

## 2. How to create and insert a new element
- Create element: document.createElement("tagName")
- Add content: element.textContent = "text" or element.innerHTML = "HTML"
- Insert into DOM: parent.appendChild(element) or parent.insertBefore(element, referenceNode)

- Example: let newDiv = document.createElement("div");
    newDiv.textContent = "I am new here!";
    document.body.appendChild(newDiv); -
    
## 3. What is Event Bubbling and how does it work?

- Event starts on the target element and bubbles up to parent elements.
- Example: Clicking a button inside a div triggers:
     1. Button click handler
     2. Div click handler
     3. Body click handler     

## 4. What is Event Delegation in JavaScript? Why is it useful?

- Attach a single event listener to a parent to handle events of children.
- Works because of event bubbling.
- Example: document.querySelector("#menu").addEventListener     ("click", function(e) {
  if (e.target.tagName === "LI") {
    alert("You clicked " + e.target.textContent);
  }
  });
#### Benefits:
- Fewer event listeners → better performance
- Works for dynamically added elements

##  5. Difference between preventDefault() and stop Propagation()

- preventDefault() → stops the default browser action (e.g.,    prevents link navigation).
- stopPropagation() → stops event from bubbling up to parent elements.
### Summary:
- preventDefault() → stop default action
- stopPropagation() → stop bubbling