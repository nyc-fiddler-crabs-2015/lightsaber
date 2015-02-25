require 'sinatra'


get '/' do
  erb :index
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


post '/users/new' do
  hey = User.new({name: params[:name], password: params[:password]})
  redirect "/users/#{hey.name}"
end

get '/users/:name' do
  @name = params[:name]
  erb :profile
end

put '/users/:name' do
end

delete '/users/:name' do
end
