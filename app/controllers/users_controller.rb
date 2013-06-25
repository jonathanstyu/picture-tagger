class UsersController < ApplicationController
  before_filter :redirect_to_login


  def show
    render json: @current_user
  end

  def redirect_to_login
    unless @current_user
      redirect_to new_session_path
    end
  end

end
