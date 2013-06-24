Phototagger::Application.routes.draw do
  resources :session, :only => [:new, :create, :destroy]
end
