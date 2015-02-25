require File.expand_path '../spec_helper.rb', __FILE__

describe "My app" do
  it "should allow us to go to the index page" do
    get '/'
    last_response.should be_ok
    expect(last_response.body).to include('Welcome to my LightSaber')
  end
  it "should let you go to a user page" do
    get '/users/rayan'
    expect(last_response).to be_ok
    expect(last_response.body).to include('<h1>rayan</h1>')

  end

end