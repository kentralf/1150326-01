const drawButton = document.getElementById("drawButton");
const fortunePanel = document.getElementById("fortunePanel");

const fortunes = [
  {
    title: "溫柔之星",
    message: "今天你和媽媽的連結像春天花園般明亮，分享一句感謝話語，幸福能量滿分。"
  },
  {
    title: "秘密禮物",
    message: "母親節的驚喜正在悄悄靠近，送上一杯手沖飲品或溫暖擁抱，她會感受到你的心意。"
  },
  {
    title: "家人和樂",
    message: "今天最適合一起回憶美好瞬間。把幸福回憶說出來，讓她笑容綻放。"
  },
  {
    title: "甜蜜祝福",
    message: "一句暖心肯定，勝過任何禮物。告訴媽媽你最欣賞她的堅持與愛，今天是愛的節日。"
  },
  {
    title: "花語魔法",
    message: "你的陪伴就是她最珍貴的禮物。安排一段安靜相處時光，讓感情升溫。"
  }
];

function showFortune() {
  const index = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[index];

  fortunePanel.innerHTML = `
    <div class="fortune-title">${fortune.title}</div>
    <div class="fortune-message">${fortune.message}</div>
  `;
}

drawButton.addEventListener("click", showFortune);
