Phototagger::Application.routes.draw do
  resources :session, :only => [:new, :create, :destroy]

  resources :photos, :only => [:index, :show, :create, :destroy]
end
