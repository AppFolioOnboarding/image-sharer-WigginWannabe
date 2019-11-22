Rails.application.routes.draw do
  resources :images

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'images#index'
end

# class SubscriptionCancellation < ApplicationController
#   def create
#     subscription = Subscription.find(params[:id])
#     subscription.update(canceled: true)

#     CancellationNofifier.notify(SITE_ADMIN_EMAIL, subscription.user)

#     redirect_to login_path
#   end
# end
