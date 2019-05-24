Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get 'map1', to: 'homes#index'
  get 'map2', to: 'homes#index'
end
