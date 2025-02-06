const essayInput = document.getElementById('essayInput');
        const submitBtn = document.getElementById('submitBtn');
        const analyticsContainer = document.getElementById('analyticsContainer');
        const wordCountElement = document.getElementById('wordCount');
        const typingSpeedElement = document.getElementById('typingSpeed');
        const backspaceCountElement = document.getElementById('backspaceCount');
        const startTimeDisplay = document.getElementById('startTimeDisplay');
        const endTimeDisplay = document.getElementById('endTimeDisplay');
        const totalDurationDisplay = document.getElementById('totalDuration');

        let backspaceCount = 0;
        let startTime = null;
        let endTime = null;

        essayInput.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                backspaceCount++;
            }
            if (!startTime) {
                startTime = new Date();
                startTimeDisplay.textContent = startTime.toLocaleTimeString(); // Show start time
            }
        });

        submitBtn.addEventListener('click', () => {
            endTime = new Date();
            const text = essayInput.value;
            const words = text.trim().split(/\s+/);
            const wordCount = words.length;
            const typingTime = (endTime - startTime) / 1000 / 60; // Time in minutes
            const typingSpeed = Math.round(wordCount / typingTime) || 0;

            wordCountElement.textContent = wordCount;
            typingSpeedElement.textContent = typingSpeed;
            backspaceCountElement.textContent = backspaceCount;
            endTimeDisplay.textContent = endTime.toLocaleTimeString(); // Show submission time

            // Calculate total duration
            const totalMinutes = Math.floor(typingTime);
            const totalSeconds = Math.round((typingTime - totalMinutes) * 60);
            totalDurationDisplay.textContent = `${totalMinutes} min ${totalSeconds} sec`;

            analyticsContainer.style.display = 'block';
        });