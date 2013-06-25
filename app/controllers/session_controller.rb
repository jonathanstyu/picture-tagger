class SessionController < ApplicationController

  def create
    user = User.find_by_username(params[:username])
    if user.verify_password(params[:password])
      session[:token] = user.assign_new_token!
      redirect_to user_photos_path(user)
    else
      render :json => "Go away Hacker"
    end
  end


end
