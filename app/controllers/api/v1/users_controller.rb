class Api::V1::UsersController < ApplicationController
  def index
    @user = current_api_v1_user
    render json: User.select(:id, :name, :email).find(current_api_v1_user.id)
  end

  def show
  end
end
