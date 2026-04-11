# letter-project
"i hope you read this, even if it's too late."
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>for you</title>

<style>
body {
  background-color: black;
  color: white;
  font-family: monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

#text {
  max-width: 300px;
  line-height: 1.6;
}
</style>
</head>

<body>

<div id="text"></div>

<script>
const message = `Hello,

I don’t know if you still remember me,
or if I’ve already become just a part of your past.

But wherever you are,
I truly hope you’re doing well.

Do you know?
All this time we’ve been apart,
you’ve never really left my mind.

Somehow, your presence still lingers,
like a shadow that quietly follows me everywhere.

I just miss you.
More than I can explain.

I miss you so bad...`;

let i = 0;
function typeWriter() {
  if (i < message.length) {
    document.getElementById("text").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

typeWriter();
</script>

</body>
</html>
