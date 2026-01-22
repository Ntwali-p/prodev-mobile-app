import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },

  searchGroup: {
    backgroundColor: "white",
    padding: 16,
  },

  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },

  searchControlGroup: {
    flex: 1,
  },

  searchFormText: {
    fontSize: 16,
    fontWeight: "500",
  },

  searchControl: {
    height: 48,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginTop: 6,
  },

  searchButton: {
    width: 48,
    height: 48,
    backgroundColor: "#34967C",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  filterGroup: {
    flexDirection: "row",
    columnGap: 20,
    paddingHorizontal: 16,
    alignItems: "center",
  },

  filterContainer: {
    alignItems: "center",
    width: 70,
  },

  listingContainer: {
    padding: 16,
  },

  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },

  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
  },

  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { styles };
