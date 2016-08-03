class BucketsController < ApplicationController
  def index
    render :json => Bucket.all
  end

  def show
    render :json => Bucket.find(params[:id])
  end

  def create
    bucket = {country: params[:country], region: params[:region], capital: params[:capital], }
    Bucket.create bucket
    render :json => Bucket.last
  end

  def edit
    render :json => Bucket.find(params[:id])
  end

  def destroy
    bucket = Bucket.find(params[:id])
    Bucket.destroy
    render :json => true
  end
end
