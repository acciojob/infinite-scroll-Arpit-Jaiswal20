document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById("infi-list");

    function addList(count) {
        for (let i = 0; i < count; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = "Item " + (list.children.length + 1);
            list.appendChild(listItem);
        }
    }

    addList(10); // Initial 10 items

    list.addEventListener('scroll', function() {
        console.log(this.scrollTop + " " + this.clientHeight + " " + this.scrollHeight);

        // Use a small threshold (5px) to ensure the condition triggers properly
        if (this.scrollTop + this.clientHeight >= this.scrollHeight - 5) {
            addList(2); // Add 2 more items when scrolled to the bottom
        }
    });
});
