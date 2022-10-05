namespace InternetShop_beckend.Response
{
    public class UserManagerResponse
    {
        public string? Message { get; set; }

        public bool IsSuccess { get; set; }

        public IEnumerable<string>? Errors { get; set; }

        public DateTime ExpireDate { get; internal set; }

        public string? ReturnUrl { get; set; } = "https://www.google.com.ua/?hl=uk";
    }
}
