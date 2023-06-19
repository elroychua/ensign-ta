// Reusable description for all tasks
const SAMPLE_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..";
// Backlog data
const backlog = {
  title: "Backlog",
  tasks: [
    {
      name: "Nulla volutpat aliquam velit",
      description: SAMPLE_DESCRIPTION,
      assignee: "OZ",
      assigneeColor: "blue",
      dueDate: "",
      dueDateColor: "",
    },
    {
      name: "Facilisis in pretium nisl aliquet",
      description: SAMPLE_DESCRIPTION,
      assignee: "LE",
      assigneeColor: "purple",
      dueDate: "Two days ago",
      dueDateColor: "red",
    },
    {
      name: "Eget porttitor lorem",
      description: SAMPLE_DESCRIPTION,
      assignee: "ME",
      assigneeColor: "lightBlue",
      dueDate: "",
      dueDateColor: "",
    },
  ],
};
// Todo data
const todo = {
  title: "Todo",
  tasks: [
    {
      name: "Eget porttitor lorem",
      description: SAMPLE_DESCRIPTION,
      assignee: "AM",
      assigneeColor: "purple",
      dueDate: "Today",
      dueDateColor: "purple",
    },
    {
      name: "Consectetur adipiscing elit",
      description: SAMPLE_DESCRIPTION,
      assignee: "OZ",
      assigneeColor: "blue",
      dueDate: "In three days",
      dueDateColor: "green",
    },
    {
      name: "Eget porttitor lorem",
      description: SAMPLE_DESCRIPTION,
      assignee: "LE",
      assigneeColor: "purple",
      dueDate: "July 21",
      dueDateColor: "green",
    },
  ],
};
// Done data
const done = {
  title: "Done",
  tasks: [
    {
      name: "Ac tristique libero volutpat at",
      description: SAMPLE_DESCRIPTION,
      assignee: "LE",
      assigneeColor: "purple",
      dueDate: "A week ago",
      dueDateColor: "gray",
    },
    {
      name: "Phasellus iaculis neque",
      description: SAMPLE_DESCRIPTION,
      assignee: "OZ",
      assigneeColor: "blue",
      dueDate: "Last Tuesday",
      dueDateColor: "gray",
    },
    {
      name: "Facilisis in pretium nis aliquet",
      description: SAMPLE_DESCRIPTION,
      assignee: "AM",
      assigneeColor: "purple",
      dueDate: "",
      dueDateColor: "",
    },
  ],
};

const columnContainer = document.querySelector(".board");

// Function to create a column
function createColumn(param) {
  // Destructure the param
  let { title, tasks } = param;
  const column = document.createElement("div");
  column.classList.add("column");
  const columnHeader = document.createElement("div");
  columnHeader.classList.add("column-header");
  columnHeader.textContent = title;
  column.appendChild(columnHeader);
  // Create cards based on backlog
  tasks.forEach((task) => {
    const card = document.createElement("div");
    card.classList.add("card");
    // Create card name
    const cardName = document.createElement("h1");
    cardName.textContent = task.name;
    card.appendChild(cardName);
    // Create card description
    const cardDescription = document.createElement("h3");
    cardDescription.textContent = task.description;
    card.appendChild(cardDescription);

    // Create card details container
    const cardDetails = document.createElement("div");
    cardDetails.classList.add("cardDetails");
    // Create assignee
    const cardAssignee = document.createElement("div");
    if (task.assigneeColor === "blue") {
      cardAssignee.classList.add("cardName-blue");
    } else if (task.assigneeColor === "purple") {
      cardAssignee.classList.add("cardName-purple");
    } else if (task.assigneeColor === "lightBlue") {
      cardAssignee.classList.add("cardName-lightblue");
    }
    cardAssignee.textContent = task.assignee;
    cardDetails.appendChild(cardAssignee);
    // Create due date
    const cardDueDate = document.createElement("p");
    if (task.dueDateColor === "red") {
      cardDueDate.classList.add("cardDueDate-red");
    } else if (task.dueDateColor === "green") {
      cardDueDate.classList.add("cardDueDate-green");
    } else if (task.dueDateColor === "purple") {
      cardDueDate.classList.add("cardDueDate-purple");
    } else if (task.dueDateColor === "gray") {
      cardDueDate.classList.add("cardDueDate-gray");
    } else {
      cardDueDate.classList.add("cardDueDate");
    }

    cardDueDate.textContent = task.dueDate;
    cardDetails.appendChild(cardDueDate);

    card.appendChild(cardDetails);

    column.appendChild(card);
  });

  columnContainer.appendChild(column);
}

// Create columns based on data
createColumn(backlog);
createColumn(todo);
createColumn(done);
