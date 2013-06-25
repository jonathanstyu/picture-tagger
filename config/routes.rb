Phototagger::Application.routes.draw do
  root :to => 'session#new'
  resources :photos, :only => [:create, :show, :destroy, :index
  ]
  resources :session, :only => [:new, :create, :destroy]
  resources :users, :only => [:show] do
    resources :photos, :only => [:index]
  end

  get "friends", :controller => :users
end
