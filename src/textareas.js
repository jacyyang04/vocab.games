let textareas = document.querySelectorAll(".textarea");
const hiddenTextarea = document.createElement("div");
let content = null;

// Apply common [.textarea] styling to [hiddenTextArea].
hiddenTextarea.classList.add(".textarea");

for(let textarea of textareas) {
  (function(textarea) {
    // On input into a [textarea]...
    textarea.addEventListener('input', function() {
      // Append [.hiddenTextArea] div as a child to the [textarea],
      textarea.parentNode.appendChild(hiddenTextarea);
      textarea.style.resize = 'none';
      // This removes scrollbars
      textarea.style.overflow = 'hidden';
      // Grab the content and clone over into hiddenTextarea.
      content = textarea.value;
      content = content.replace(/\n/g, '<br>');
      hiddenTextarea.innerHTML = content + '<br style="line-height: 3px;">';
      // Make [hiddenTextarea] hidden but [display: block] to read the height.
      hiddenTextarea.style.visibility = 'hidden';
      hiddenTextarea.style.display = 'block';
      // Set [textarea]'s height to the same as the [hiddenTextarea].
      textarea.style.height = hiddenTextarea.offsetHeight + 'px';
      // Hide [hiddenTextarea].
      hiddenTextarea.style.visibility = 'visible';
      hiddenTextarea.style.display = 'none';
    });
  })(textarea);
}