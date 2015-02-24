require 'sinatra'

get '/' do
  @message= "Rayan is my name"
  erb :index
end

get '/profile' do
  erb :profile
end

  <<-HTML
<p>
Welcome to my LightSaber.  Prepare to be amazed.
<p>
<a href='/sound'>Hear my swooshy sound!</a>
  HTML
end

get '/sound' do
  <<-HTML
<audio controls>
  <source src="http://soundbible.com/grab.php?id=19&type=wav" type="audio/wav">
  <source src="http://soundbible.com/grab.php?id=19&type=mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
  HTML
end
