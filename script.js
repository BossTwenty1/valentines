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

        
        content.innerHTML = `
            <div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;" id="mainEnvelopeContainer">
                <div class="envelope-wrapper" id="envelopeSection">
                    <div id="envelope" class="close">
                        <div class="front flap"></div>
                        <div class="front pocket"></div>
                        <div class="letter">
                            <div style="padding: 10px; font-size: 10px; line-height: 1.4; color: black; font-family: 'Caveat', sans-serif; text-align: center;">
                                Click to read...
                            </div>
                        </div>
                    </div>
                </div>
                <div style="text-align: center; font-size: 18px; color: #FF6863; font-weight: bold;">
                    Click the envelope to open it!
                </div>
                <div class="continue">
                    <button id="continue">Continue</button>
                </div>
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
						height: auto;
					}

					#envelope {
						position: relative;
						height: 180px;
						width: 280px;
						border-bottom-left-radius: 6px;
						border-bottom-right-radius: 6px;
						background-color: #FF6863;
						box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
						cursor: pointer;
						overflow: hidden;
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
						height: auto;
						min-height: 95%;
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
						transform: translatey(-180px);
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

        // Store the envelope click handler function for reuse
        const openEnvelopeHandler = function () {
            // Replace the envelope with a large readable letter
            const envelopeSection = document.getElementById("envelopeSection");
            envelopeSection.innerHTML = `
                <div style="background: white; border-radius: 15px; padding: 40px; max-width: 600px; margin: 20px auto; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15); font-family: 'Caveat', sans-serif; line-height: 2; font-size: 24px; color: black; text-align: center;">
                    <p style="margin: 0 0 20px 0; font-size: 28px;">Hey love 🤍</p>
                    <p style="margin: 0 0 15px 0; text-align: left;">Another Valentine's is coming, and this one feels extra special because we'll be celebrating our anniversary too on Feb 15. I still can't believe how blessed I am to have you in my life.</p>
                    <p style="margin: 0 0 15px 0; text-align: left;">You've brought so much happiness and peace into my world. The simple moments with you mean the most to me. Every day I get to love you is something I don't take for granted.</p>
                    <p style="margin: 0 0 15px 0; text-align: left;">I'm really looking forward to celebrating our love on Feb 15, Valentine's and our anniversary, all in one beautiful day.</p>
                    <p style="margin: 0 0 15px 0; text-align: left;">I love you always, more than words can explain. 🤍</p>
                    <p style="margin: 0; text-align: center; font-size: 26px;">- your man</p>
                    <button id="backBtn" style="margin-top: 30px; padding: 12px 25px; background: #FF6863; color: white; border: none; border-radius: 5px; font-size: 18px; font-weight: bold; cursor: pointer; font-family: Arial, sans-serif;">Back</button>
                </div>
            `;
            
            // Back button functionality
            document.getElementById("backBtn").addEventListener("click", function () {
                // Recreate the envelope
                const envelopeSection = document.getElementById("envelopeSection");
                envelopeSection.innerHTML = `
                    <div id="envelope" class="close">
                        <div class="front flap"></div>
                        <div class="front pocket"></div>
                        <div class="letter">
                            <div style="padding: 10px; font-size: 10px; line-height: 1.4; color: black; font-family: 'Caveat', sans-serif; text-align: center;">
                                Click to read...
                            </div>
                        </div>
                    </div>
                `;
                
                // Re-add the envelope click listener
                const newEnvelope = document.getElementById("envelope");
                newEnvelope.addEventListener("click", openEnvelopeHandler);
            });
        };
        
        // Adding event listeners to Open and Continue buttons after content is loaded
        const envelope = document.getElementById("envelope");
        const envelopeSection = document.getElementById("envelopeSection");
        const btnContinue = document.getElementById("continue");

        // Open the envelope when clicked
        envelope.addEventListener("click", openEnvelopeHandler);

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
							<img src="pictures/itenerary.png" alt="Itinerary Image" style="width: 70%; max-width: 500px; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); margin-bottom: 20px;">
							<br>
							<a id="downloadBtn" href="pictures/itenerary.png" download style="display: inline-block; padding: 12px 25px; background: #FF6863; color: white; border-radius: 5px; text-decoration: none; font-size: 18px; font-weight: bold; transition: 0.3s;">Download Itinerary</a>
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

