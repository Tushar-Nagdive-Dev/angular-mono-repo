package coo.inn.expense.manager.configs;

public class JwtTokenContext {
    
    private static final ThreadLocal<String> usernameHolder = new ThreadLocal<>();
    private static final ThreadLocal<Long> userIdHolder = new ThreadLocal<>();

    public static void setUsername(String username) {
        usernameHolder.set(username);
    }

    public static void setUserId(Long userId) {
        userIdHolder.set(userId);
    }

    public static String getUsername() {
        return usernameHolder.get();
    }

    public static Long getUserId() {
        return userIdHolder.get();
    }

    public static void clear() {
        usernameHolder.remove();
        userIdHolder.remove();
    }
}
