class UsersController < ApplicationController
     skip_before_action :authorized, only: [ :create,:show]

        def create
            user = User.create!(user_params)
            session[:user_id] = user.id
            render json: user, status: :created
        end
    
        def show
            user = User.find(session[:user_id])
            render json: user, status: :created
        end
    
        private

        def render_unprocessable_entity(invalid)
            render json: {error: invalid.record.errors}, status: :unprocessable_entity
        end
    
        def user_params
            params.permit(:username, :password)
        end
end
