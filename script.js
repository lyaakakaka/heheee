const message = `hi, ngại nhỉ. vì bạn hèn mà, không dám nhắn hay nói trực tiếp với Ngọc những điều này nên để bạn nói lên suy nghĩ mình qua cách này nhé. 
Cũng chả cần ai nói với ai câu nào nhưng cả 2 đều tự biết có problem đang xảy ra mà đúng không? Vậy nguyên nhân là vì sao nhỉ? và liệu ai là người sai nhỉ? 
Bạn biết Ngọc bị tổn thương về cảm xúc rất nhiều. Và bạn biết điều đó là lỗi của bạn. Bạn vô tâm, bộp chộp, thiếu suy nghĩ, bạn nhận ra điều đó. Thật ra bạn có cố gắng để những điều đó nó không xảy ra, nhưng ở một góc cạnh nào đó bạn vẫn làm ngọc tổn thương mà bạn không biết. 
Bạn xin lỗi Ngọc nhiều nhé, vì những lần vô tâm, những lời nói , hành động không suy nghĩ.
Ngay lúc đang viết những dòng này bạn cũng chưa tìm được cách giải quyết chuyện giữa 2 đứa nữa. và bạn nghĩ có thể là đã quá trễ để cứu nhưng bạn vẫn mong lời xin lỗi thật sự đến Ngọc. và bạn muốn Ngọc biết bạn thật sự trân trọng Ngọc

Nhưng thật ra bạn cũng bị tổn thương. Bạn nhận ra vấn đề ngay lúc nó mới xảy ra nhưng bạn không dám chủ động làm bất cứ việc gì cả. Vì bạn tự ti. Bạn sợ bạn bộp chộp làm sai, bạn sợ nói sai, sợ làm sai. Không biết từ bao giờ bạn mất tự tin trước Ngọc như vậy nữa. Kể cả bây giờ cũng vậy, lời xin lỗi cũng không thể nói đàng hoàng. Nhưng bạn vẫn muốn nói ra hết tất cả những gì bữa giờ bạn lăn tăn.

Bạn biết Ngọc không phải một người sến súa như bạn, chắc tin nhắn này sẽ là dài nhất mà Ngọc từng đọc, nhưng thông cảm và ráng đọc hết những gì bạn muốn nói nha.  And I want you to know that I appreciate you so much.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
