// This code is built based on a tutorial on Youtube: https://www.youtube.com/watch?v=IqYiVHrO2U8

// Get some HTML elements necessary for pagination
const list_items = document.getElementsByClassName("contact-item cf"); // Collection of 54 elements to display students' information
const list_element = document.getElementsByClassName("contact-list");
const pagination_element = document.getElementsByClassName("pagination");

// initialize variables for the current page and number of items per page
let currentPage = 1;
let num_items = 10;

// split the list and display students for each page
function DisplayList(items, wrapper, items_per_page, page){
    wrapper[0].innerHTML = "";
    page--;

    // set up the indexes of the start and end items of each page and split the list
    let start = items_per_page * page;
    let end = start + items_per_page;
    let paginatedItems = items.slice(start, end);

    // set up HTML codes to display the list for each page
    for (let i=0; i < paginatedItems.length; i++){
        let item = paginatedItems[i];
        wrapper[0].innerHTML += "<li class='contact-item cf'>" + item.innerHTML + "</li>\n";
    }
}

function SetupPagination(items, items_per_page){
    let page_count = Math.ceil(items.length / items_per_page); // count how many pages needed
    for (let i=1; i < page_count + 1; i++){
        PaginationButton(i, items); // set up the button to display each page
    }
}

function PaginationButton(page, items){
    // set up the codes for each button and add to the HTML element for pagination
    let buttonList = document.querySelector('.pagination ol');
    let button = createButton(page);
    buttonList.appendChild(button);
    
    // set what to display when the user clicks on each button
    button.addEventListener('click', function(){
        currentPage = page;
        DisplayList(items, list_element, num_items, currentPage);

        // change active status of buttons after the user clicks on a button
        let current_btn = document.querySelector(".pagination li a.active");
        current_btn.classList.remove("active");
        button.firstChild.classList.add("active");
    });
}

// create new HTML elements to create each button
function createButton(page) {
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.textContent = page;
    if(currentPage == page){
        a.classList.add('active');
    }

    li.appendChild(a);
    return li;
}

items = Array.from(list_items); // convert HTML collection to an array to run the functions

// execute functions to display the list and pagination element for each page
DisplayList(items, list_element, num_items, currentPage);
SetupPagination(items, num_items);