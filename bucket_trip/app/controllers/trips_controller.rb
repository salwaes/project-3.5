class TripsController < ApplicationController
  def index
    # let country = params[:id]
    url = "https://restcountries.eu/rest/v1/name/hong%20kong"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end
end
