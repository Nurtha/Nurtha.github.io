import java.util.Scanner;

public class test1 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        int maxOrders = 10;
        String[] orders = new String[maxOrders];
        int[] prices = new int[maxOrders];
        int orderCount = 0;
        int total = 0;
        
        while (true) {
            menu();
            int orderNum = getInput(scan);
            
            if (orderNum == 6) {
                if (orderCount == 0) {
                    System.out.println("No items in cart. Goodbye!");
                } else {
                    displayReceipt(orders, prices, orderCount, total);
                }
                break;
            }
            
            String itemName = "";
            int price = 0;
            
            switch (orderNum) {
                case 1:
                    itemName = "Espresyo";
                    price = 30;
                    break;
                case 2:
                    itemName = "Bread";
                    price = 10;
                    break;
                case 3:
                    itemName = "Mix & Match";
                    price = 99;
                    break;
                case 4:
                    itemName = "Ice Tea";
                    price = 25;
                    break;
                case 5:
                    itemName = "Coke";
                    price = 25;
                    break;
                default:
                    System.out.println("Please enter a valid option (1-6)");
                    continue;
            }
            
            if (orderCount < maxOrders) {
                orders[orderCount] = itemName;
                prices[orderCount] = price;
                orderCount++;
                total += price;
                System.out.println(itemName + " added to cart. $" + price);
            } else {
                System.out.println("Cart is full! Maximum " + maxOrders + " items allowed.");
            }
            
            System.out.print("Would you like to add more items? (1=Yes, 0=No): ");
            int continueShopping = getInput(scan);
            if (continueShopping == 0) {
                displayReceipt(orders, prices, orderCount, total);
                break;
            }
        }
        scan.close();
    }
    
    public static void menu() {
        System.out.println("\n******************");
        System.out.println("*******MENU*******");
        System.out.println("******************");
        System.out.println("(1) Espresyo    $30");
        System.out.println("(2) Bread       $10");
        System.out.println("(3) Mix & Match $99");
        System.out.println("(4) Ice Tea     $25");
        System.out.println("(5) Coke        $25");
        System.out.println("(6) Checkout");
        System.out.print("Enter Order (1-6): ");
    }
    
    public static int getInput(Scanner scan) {
        try {
            return scan.nextInt();
        } catch (Exception e) {
            System.out.println("Please enter a valid number");
            scan.next();
            return getInput(scan);
        }
    }
    

    public static void displayReceipt(String[] orders, int[] prices, int orderCount, int total) {
        System.out.println("\n======== RECEIPT ========");
        System.out.println("Item\t\tPrice");
        System.out.println("----\t\t-----");
        
        for (int i = 0; i < orderCount; i++) {
            System.out.println(orders[i] + "\t\t$" + prices[i]);
        }
        
        System.out.println("-----------------------");
        System.out.println("Total:\t\t$" + total);
        System.out.println("=======================");
        System.out.println("Thank you for your purchase!");
    }
}
