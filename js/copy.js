const selectedElements = document.querySelectorAll(".myInputClicker");

    selectedElements.forEach((element, index) => {
      element.addEventListener("click", function () {
        let idOfInputWithValueToBeCopied = element.getAttribute("data-target");
        inputWithValueToBeCopied = document.querySelector(
          "#" + idOfInputWithValueToBeCopied
        );

        inputWithValueToBeCopied.select();
        inputWithValueToBeCopied.setSelectionRange(
          0,
          99999
        ); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(inputWithValueToBeCopied.value);

        /* Alert the copied text */
        alert("Text has been copied to clipboard");
      });
    });