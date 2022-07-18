class Api::SmsMessagesController < ApplicationController
  def create
    client = Twilio::REST::Client.new(ENV['ACCOUNT_SID'], ENV['AUTH_TOKEN']) 

    client.messages.create(
      from: ENV['TWILIO_NUMBER'],
      to: sms_message_params['mobile_number'],
      body: sms_message_params['message']
    )

    
    render json: { message: 'Text Message Sent' }
  end

  private
    def sms_message_params
      params.require(:sms_message).permit(:mobile_number, :message)
    end
end
