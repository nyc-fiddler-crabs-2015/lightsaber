get '/' do
  erb :index
end

post '/person' do
  content_type :json
  "#{params}".to_json
end

get '/person' do
  content_type :json
  return person
end