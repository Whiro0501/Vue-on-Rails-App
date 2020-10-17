class HomeController < ApplicationController
  def index
    current_user&.id
  end
end
