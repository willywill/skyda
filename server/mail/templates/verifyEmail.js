import config from '../../config';

export const verifyEmailTemplate = (name, token) => `
<div class="flex-container" style="display: flex;align-items: center;justify-content: center;height: 100vh;">
  <div class="content-box" style="height: 100%;width: 60vw;background-color: white;box-shadow: 0px 10px 30px 0px rgba(22, 24, 25, 0.08);">
    <div class="content-title" style="font-size: 3em;color: rgba(30, 30, 60, 0.9);margin: 1em;text-align: center;">
      Verify Your Email
    </div>
    <hr>
    <div class="content" style="font-weight: 300;font-size: 1.3em;padding-top: 3em;text-align: center;max-width: 70%;margin: auto;">
      Congrats ${name}! 🎉 You have created an account. Please continue by clicking the link below to <strong>verify</strong> your email and access all the features of the app.
      <br> <br> <br>
      <a href="${config.domain}/api/v1/auth/verify/${token}">Verify Your Account</a>
    </div>
  </div>
</div>
`;
