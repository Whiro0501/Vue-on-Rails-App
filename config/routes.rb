Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do

      get 'users/show'
      get 'users/current'
    end
  end
  namespace :api, { format: 'json' } do
    namespace :v1 do
      mount_devise_token_auth_for "User", at: "auth"
      get 'users/index'
    end

  end
  root to: 'home#index'
  get  "/user", to: 'home#index'
  get "/dser", to: "home#index"
  get "/about", to: "home#index"
  get "/sale", to: "home#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  end