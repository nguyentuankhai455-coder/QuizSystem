document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
        <div class="copyright">
            <span>&copy; ${new Date().getFullYear()}</span>
            <span class="brand">QuizSystem</span>
            <span>·</span>
            <span>Made with</span>
            <span class="heart">❤️</span>
            <span>by</span>
            <strong style="color: #2c3e50;">Nguyễn Tuấn Khải</strong> 
            <span>by DEV Dora Fanclub Việt Nam</span>
            <span>·</span>
            <span class="version">v2.0.0</span>
        </div>
    `;

    // Tìm tất cả các thẻ footer có class 'footer' để thay thế nội dung
    const footers = document.querySelectorAll("footer.footer");
    footers.forEach(footer => {
        footer.innerHTML = footerHTML;
    });
});