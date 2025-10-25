
public class Star{
    public static void main(String[] args) {
        int row = 5;

        String startChar = "*";

        for (int i = 1; i <= row; i++) {
            String line = "";
            String currentChar = startChar;
            for (int j = 1; j <= i; j++) {
                line += currentChar+" ";
                currentChar = (currentChar.equals("*")) ? "$" : "*";
            }
            System.out.println(line);
            startChar = (line.trim().endsWith("*")) ? "$" : "*";
        }
    }
}