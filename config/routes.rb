Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get 'map1', to: 'homes#index'
  get 'map2', to: 'homes#index'
  get 'map3', to: 'homes#index'
  get 'map4', to: 'homes#index'
  get 'map5', to: 'homes#index'
  get 'map6', to: 'homes#index'
  get 'map7', to: 'homes#index'
end
