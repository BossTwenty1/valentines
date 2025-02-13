document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");

    // Start music after user interaction (for autoplay restrictions)
    document.body.addEventListener("click", function () {
        if (audio.paused) {
            audio.play().catch(error => console.error("Autoplay blocked:", error));
        }
    }, { once: true });

    // Replace content when button is clicked
    document.getElementById("startButton").addEventListener("click", function () {
        let content = document.getElementById("content");

        // Clear everything inside the div and replace it with full content
        content.innerHTML = `
            <div class="envelope-wrapper">
                <div id="envelope" class="close">
                    <div class="front flap"></div>
                    <div class="front pocket"></div>
                    <div class="letter">
                       <p class="words line1">I'm vvv lucky to have you in my life :D</p>
                        <p class="words line2">Can't wait to celebrate valentine's wt you!</p>
                        <p class="words line3">I love you more than you’ll ever know!</p>
                        <p class="words line4">- your loving bf</p>

                    </div>
                </div>
            </div>
            <div class="continue">
                <button id="continue">Continue</button>
            </div>
				<style>
					@font-face {
						font-family: 'Caveat';
						src: url('fonts/Caveat-Regular.ttf') format('truetype');
					}

					body {
						background-color: #ffc3da;
						font-family: 'Caveat', sans-serif;
					}

					.envelope-wrapper {
						height: 380px;
					}

					#envelope {
						position: relative;
						height: 180px;
						width: 280px;
						border-bottom-left-radius: 6px;
						border-bottom-right-radius: 6px;
						margin-left: auto;
						margin-right: auto;
						top: 50%;
						background-color: #FF6863;
						box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
						cursor: pointer;
					}

					.front {
						position: absolute;
						width: 0;
						height: 0;
						z-index: 3;
					}

					.flap {
						border-top: 98px solid #FF6863;
						border-left: 140px solid transparent;
						border-right: 140px solid transparent;
						border-bottom: 82px solid transparent;
						transform-origin: top;
					}

					.pocket {
						border-left: 140px solid #FF8BA0;
						border-right: 140px solid #FF8BA0;
						border-bottom: 90px solid #FFA8B5;
						border-top: 90px solid transparent;
						border-bottom-left-radius: 6px;
						border-bottom-right-radius: 6px;
					}

					.letter {
						position: relative;
						background-color: white;
						width: 90%;
						height: 95%;
						top: 0%;
						border-radius: 10px;
						box-shadow: 0 2px 26px rgba(0, 0, 0, .12);
						margin-left: auto;
						margin-right: auto;
					}

					.letter:after {
						content: "";
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
					}

						position: absolute;
						left: 10%;
						width: 80%;
						height: 14%;
						font-size: 1px;
						font-family: 'Caveat', sans-serif; 
						color: black;
					}

					.line1 { top: 15%; }
					.line2 { top: 25%; }
					.line3 { top: 45%; text-align: center; }
					.line4 { top: 55%; text-align: center; }

					.open .flap {
						transform: rotatex(180deg);
						transition: transform 0.4s ease, z-index 0.6s;
						z-index: 1;
					}

					.close .flap {
						transform: rotatex(0deg);
						transition: transform 0.4s 0.6s ease, z-index 1s;
						z-index: 5;
					}

					.open .letter {
						transform: translatey(-80px);
						transition: transform 0.4s 0.6s ease, z-index 0.6s;
						z-index: 2;
					}

					.close .letter {
						transform: translatey(0deg);
						transition: transform 0.4s ease, z-index 1s;
						z-index: 1;
					}

					.continue {
						text-align: center;
					}

					.continue button {
						font-weight: 800;
						font-style: normal;
						transition: all 0.1s linear;
						background-color: transparent;
						color: #FFFFFF;
						display: inline-block;
						font-size: 14px;
						text-transform: uppercase;
						margin: 20px;
						margin-top: 100px;
						padding: 10px;
						line-height: 2em;
						text-decoration: none;
						min-width: 150px;
						outline: none;
					}

					.continue button:hover {
						background-color: #FFFFFF;
						cursor: pointer;
						color: white;
					}

					.question {
						text-align: center;
						margin-top: 100px;
					}

					.question p {
						font-size: 20px;
						font-weight: bold;
						color: #FF6863;
					}

					.question button {
						background-color: #FF6863;
						color: white;
						padding: 10px 20px;
						border: none;
						font-size: 18px;
						margin: 10px;
						cursor: pointer;
						border-radius: 5px;
						font-weight: bold;
					}

					.question button:hover {
						background-color: #FF8BA0;
					}
					
					.surprise {
						text-align: center;
						margin-top: 50px;
					}

					.itinerary-img {
						width: 70%;
						max-width: 500px;
						border-radius: 10px;
						box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
						margin-bottom: 20px;
					}

					#downloadBtn {
						display: inline-block;
						padding: 12px 25px;
						background-color: #FF6863;
						color: white;
						border-radius: 5px;
						text-decoration: none;
						font-size: 18px;
						font-weight: bold;
						transition: 0.3s;
					}

					#downloadBtn:hover {
						background-color: #FF8BA0;
						transform: scale(1.05);
					}
				</style>
        `;

        // Adding event listeners to Open and Continue buttons after content is loaded
        const envelope = document.getElementById("envelope");
        const btnContinue = document.getElementById("continue");

        // Open the envelope when clicked
        envelope.addEventListener("click", function () {
            envelope.classList.add("open");
            envelope.classList.remove("close");
        });

        // Continue button functionality to show question
        btnContinue.addEventListener("click", function () {
            content.innerHTML = `
			    <img src="pictures/what.gif" alt="asking tonton">
				
                <div class="question">
                    <p style="font-size: 24px;">Will you be my Valentine?</p>
                    <button id="yesBtn">Yes</button>
                    <button id="noBtn">No</button>
                </div>
            `;
            
            // Yes and No button event listeners
            const yesBtn = document.getElementById("yesBtn");
            const noBtn = document.getElementById("noBtn");

            // "Yes" button functionality
            document.getElementById("yesBtn").addEventListener("click", function () {
                content.innerHTML = `
					<div style="text-align: center;">
						<img src="pictures/love.gif" alt="Love GIF" style="display: block; margin: 0 auto;">
						<p style="font-size: 24px;">Yaaaaaay! I love you!</p>
					</div>
				
                    <div style="text-align: center; margin-top: 50px;">
                        <button id="surpriseBtn" style="padding: 12px 25px; font-size: 18px; background: #ffa500; color: white; border: none; cursor: pointer; border-radius: 5px;">Click for a Surprise</button>
                    </div>
                `;

                // Surprise button functionality
                document.getElementById("surpriseBtn").addEventListener("click", function () {
                    content.innerHTML = `
						<div style="text-align: center; margin-top: 20px;">
							<img src="pictures/itinerary.png" alt="Itinerary Image" style="width: 70%; max-width: 500px; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); margin-bottom: 20px;">
							<br>
							<a id="downloadBtn" href="pictures/itinerary.png" download style="display: inline-block; padding: 12px 25px; background: #FF6863; color: white; border-radius: 5px; text-decoration: none; font-size: 18px; font-weight: bold; transition: 0.3s;">Download Itinerary</a>
						</div>
					`;
                });
            });

            noBtn.addEventListener("mouseover", function () {
				const maxX = window.innerWidth - noBtn.offsetWidth;
				const maxY = window.innerHeight - noBtn.offsetHeight;
			
				const randomX = Math.random() * maxX;
				const randomY = Math.random() * maxY;
			
				noBtn.style.position = "absolute";
				noBtn.style.left = `${randomX}px`;
				noBtn.style.top = `${randomY}px`;
			});
        });
    });
});

