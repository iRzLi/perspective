class Api::UsersController < ApplicationController

    def show
        @user = User.includes(:responses).find_by(id: params[:id])
        if @user
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def create
        @user = User.create(user_params)
        if @user.save
            responses = params[:user][:responses]
            responses.each do |k,v|
                @user.responses.create(question_id: k, response: v)
            end
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def user_params
        params.require(:user).permit(:email)
    end

end
