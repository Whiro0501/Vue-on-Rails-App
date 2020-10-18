class Api::V1::UsersController < ApplicationController
  def index
    @user = current_api_v1_user
    render json: {data: @user}
  end

  def show
  end
end
